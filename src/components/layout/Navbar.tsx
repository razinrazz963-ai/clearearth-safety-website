import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ShieldCheck, Award, Gauge } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import type { NavItem } from '../../data/navigation';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Icon mapping for services dropdown
  const serviceIcons: Record<string, React.ReactNode> = {
    '/services/inspection-certification': <ShieldCheck size={20} color="var(--ce-green-primary)" />,
    '/services/assessment-training': <Award size={20} color="var(--ce-green-primary)" />,
    '/services/instrumentation': <Gauge size={20} color="var(--ce-green-primary)" />,
  };

  const isActive = (item: NavItem) => {
    if (item.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(item.path);
  };

  // Close dropdown on outside click or Escape key press
  useEffect(() => {
    const handlePointerDownOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDownOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDownOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
    };
  }, []);

  // Handle clicking the SERVICES toggle button
  const handleToggleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setDropdownOpen((prev) => !prev);
  };

  // Keep open while moving mouse between button and dropdown
  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  // When mouse leaves both button AND dropdown, close with a gentle grace delay
  const handleMouseLeave = () => {
    if (dropdownOpen) {
      leaveTimerRef.current = setTimeout(() => {
        setDropdownOpen(false);
      }, 350);
    }
  };

  return (
    <nav aria-label="Main Navigation" style={{ display: 'flex', alignItems: 'center' }}>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.25rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {navigationItems.map((item) => {
          const active = isActive(item);

          if (item.hasDropdown && item.dropdownItems) {
            return (
              <li
                key={item.label}
                ref={dropdownRef}
                style={{ position: 'relative' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Click-to-open Services Toggle */}
                <button
                  type="button"
                  onClick={handleToggleClick}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.65rem 0',
                    fontSize: '1rem',
                    fontWeight: active || dropdownOpen ? 800 : 700,
                    color: active || dropdownOpen ? 'var(--ce-green-primary)' : 'var(--ce-navy-primary)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    transition: 'color var(--ce-transition-fast)',
                    outline: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--ce-green-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active && !dropdownOpen) {
                      e.currentTarget.style.color = 'var(--ce-navy-primary)';
                    }
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={17}
                    style={{
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: active || dropdownOpen ? 'var(--ce-green-primary)' : 'var(--ce-navy-primary)',
                    }}
                  />
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        backgroundColor: 'var(--ce-green-primary)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </button>

                {/* Dropdown Menu Container with Zero-Gap Bridge */}
                {dropdownOpen && (
                  <div
                    role="menu"
                    aria-label="Services Submenu"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '360px',
                      paddingTop: '6px', // bridge space
                      zIndex: 1100,
                    }}
                  >
                    <div
                      className="animate-slide-down"
                      style={{
                        backgroundColor: 'var(--ce-white)',
                        borderRadius: 'var(--ce-radius-lg)',
                        boxShadow: '0 12px 36px rgba(15, 39, 68, 0.16), 0 2px 8px rgba(15, 39, 68, 0.08)',
                        border: '1.5px solid var(--ce-border)',
                        padding: '0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                      }}
                    >
                      {item.dropdownItems.map((sub) => {
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.95rem',
                              padding: '0.85rem 1rem',
                              borderRadius: 'var(--ce-radius-md)',
                              backgroundColor: isSubActive ? 'var(--ce-green-subtle)' : 'transparent',
                              textDecoration: 'none',
                              transition: 'background-color 0.15s ease, transform 0.15s ease',
                              cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubActive) {
                                e.currentTarget.style.backgroundColor = 'var(--ce-navy-subtle)';
                                e.currentTarget.style.transform = 'translateX(3px)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubActive) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }
                            }}
                          >
                            <div
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: 'var(--ce-radius-sm)',
                                backgroundColor: isSubActive ? '#DCFCE7' : 'var(--ce-bg-main)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '1px',
                              }}
                            >
                              {serviceIcons[sub.path] || <ShieldCheck size={18} />}
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: '0.95rem',
                                  fontWeight: 700,
                                  color: isSubActive ? 'var(--ce-green-primary)' : 'var(--ce-navy-primary)',
                                  marginBottom: '3px',
                                  lineHeight: 1.3,
                                }}
                              >
                                {sub.label}
                              </div>
                              <div
                                style={{
                                  fontSize: '0.8rem',
                                  color: 'var(--ce-text-secondary)',
                                  lineHeight: 1.4,
                                }}
                              >
                                {sub.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>
            );
          }

          return (
            <li key={item.label}>
              <Link
                to={item.path}
                style={{
                  display: 'inline-block',
                  padding: '0.65rem 0',
                  fontSize: '1rem',
                  fontWeight: active ? 800 : 700,
                  color: active ? 'var(--ce-green-primary)' : 'var(--ce-navy-primary)',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  textDecoration: 'none',
                  transition: 'color var(--ce-transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--ce-green-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = 'var(--ce-navy-primary)';
                  }
                }}
              >
                <span>{item.label}</span>
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: 'var(--ce-green-primary)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
