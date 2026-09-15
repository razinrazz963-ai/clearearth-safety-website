import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Award, CheckCircle2, ArrowRight, BookOpen, Users, X, SlidersHorizontal } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { trainingCategories, trainingProgramsList } from '../../data/trainingPrograms';
import type { TrainingProgram } from '../../data/trainingPrograms';
import generalTrainingImg from '../../assets/images/services/assessment-training/training-general.jpg';

export const AssessmentTrainingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Category matcher
  const matchesCategory = (program: TrainingProgram, category: string): boolean => {
    if (category === 'All') return true;

    const titleLower = program.title.toLowerCase();
    const descLower = program.description.toLowerCase();
    const audienceLower = program.targetAudience.toLowerCase();
    const origCat = program.category.toLowerCase();

    if (category === 'Awareness') {
      return titleLower.includes('awareness') || descLower.includes('awareness') || audienceLower.includes('awareness');
    }

    if (category === 'Fire Safety') {
      return titleLower.includes('fire') || origCat.includes('fire') || descLower.includes('fire');
    }

    if (category === 'First Aid') {
      return (
        titleLower.includes('first aid') ||
        titleLower.includes('medic') ||
        titleLower.includes('heat stress') ||
        descLower.includes('first aid') ||
        descLower.includes('cpr')
      );
    }

    if (category === 'Lifting') {
      return (
        titleLower.includes('lifting') ||
        titleLower.includes('rigger') ||
        titleLower.includes('crane') ||
        titleLower.includes('signal') ||
        titleLower.includes('banksman') ||
        titleLower.includes('flagman') ||
        titleLower.includes('cradle') ||
        origCat.includes('lifting')
      );
    }

    if (category === 'Scaffolding') {
      return (
        titleLower.includes('scaffold') ||
        titleLower.includes('pasma') ||
        titleLower.includes('height') ||
        titleLower.includes('ladder') ||
        titleLower.includes('fall protection') ||
        origCat.includes('height')
      );
    }

    if (category === 'Electrical') {
      return (
        titleLower.includes('electrical') ||
        titleLower.includes('lockout') ||
        titleLower.includes('electronic') ||
        titleLower.includes('power tool') ||
        descLower.includes('electrical')
      );
    }

    if (category === 'Equipment Operator') {
      return (
        titleLower.includes('operator') ||
        titleLower.includes('loader') ||
        titleLower.includes('excavator') ||
        titleLower.includes('forklift') ||
        titleLower.includes('bobcat') ||
        titleLower.includes('container handling') ||
        titleLower.includes('concrete bucket') ||
        origCat.includes('heavy')
      );
    }

    if (category === 'Industrial Safety') {
      return (
        titleLower.includes('welder') ||
        titleLower.includes('welding') ||
        titleLower.includes('mechanic') ||
        titleLower.includes('industrial') ||
        titleLower.includes('bar bending') ||
        titleLower.includes('bar cutting') ||
        titleLower.includes('technology') ||
        origCat.includes('technical')
      );
    }

    if (category === 'Safety') {
      return (
        titleLower.includes('safety') ||
        titleLower.includes('hse') ||
        titleLower.includes('risk assessment') ||
        titleLower.includes('hira') ||
        titleLower.includes('permit to work') ||
        titleLower.includes('investigation') ||
        titleLower.includes('manual handling') ||
        titleLower.includes('ppe') ||
        titleLower.includes('excavation') ||
        titleLower.includes('road') ||
        origCat.includes('hse')
      );
    }

    if (category === 'Other') {
      return (
        titleLower.includes('confined space') ||
        titleLower.includes('gas tester') ||
        titleLower.includes('hydrogen sulfide') ||
        titleLower.includes('h2s') ||
        titleLower.includes('hys') ||
        titleLower.includes('hazmat') ||
        titleLower.includes('coshh') ||
        titleLower.includes('spill kit') ||
        titleLower.includes('dangerous goods') ||
        titleLower.includes('aviation') ||
        titleLower.includes('iso') ||
        titleLower.includes('food safety') ||
        titleLower.includes('infection') ||
        titleLower.includes('logistics') ||
        origCat.includes('hazardous') ||
        origCat.includes('iso')
      );
    }

    return program.category === category;
  };

  // Filter programs based on category and search query working together
  const filteredPrograms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return trainingProgramsList.filter((program) => {
      const matchCat = matchesCategory(program, selectedCategory);
      const matchQuery =
        !q ||
        program.title.toLowerCase().includes(q) ||
        program.description.toLowerCase().includes(q) ||
        program.targetAudience.toLowerCase().includes(q);

      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <section className="section-py" style={{ backgroundColor: 'var(--ce-bg-main)' }}>
        <Container>
          <SectionTitle
            badge="Workforce Qualification"
            badgeVariant="green"
            title="Assessment & Training Programs"
            subtitle="Accredited occupational health, safety engineering, and equipment operator qualification courses organized in accordance with UAE safety standards."
            align="center"
          />

          {/* Overview Showcase Card */}
          <div
            style={{
              backgroundColor: 'var(--ce-white)',
              borderRadius: 'var(--ce-radius-lg)',
              border: '1px solid var(--ce-border)',
              padding: '2.75rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: 'var(--ce-shadow-md)',
              marginBottom: '3.5rem',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--ce-green-primary)',
                  letterSpacing: '0.04em',
                  marginBottom: '0.75rem',
                }}
              >
                <Award size={18} /> Verified Training Curriculum
              </span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--ce-navy-primary)', marginBottom: '1rem', fontWeight: 800 }}>
                Practical Operator & Site Safety Competence
              </h3>
              <p style={{ color: 'var(--ce-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                ClearEarth Safety Consultancy LLC provides comprehensive classroom and field practical training to certify heavy equipment operators, rigging teams, scaffolding erectors, welders (1G-6G), fire marshals, and site first aiders.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={16} color="var(--ce-green-primary)" />
                  <span>Earthmoving, Mobile Crane & Forklift Operator Qualifications</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={16} color="var(--ce-green-primary)" />
                  <span>Rigger, Slinger, Signalman & Banksman Safety Standards</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={16} color="var(--ce-green-primary)" />
                  <span>Fire Fighting, First Aid, PASMA Scaffolding & Confined Space</span>
                </div>
              </div>
              <Button to="/contact?service=Assessment%20and%20Training" variant="primary" icon={<ArrowRight size={15} />}>
                Request Corporate Training Booking
              </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  borderRadius: 'var(--ce-radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--ce-shadow-lg)',
                  border: '1px solid var(--ce-border)',
                  maxWidth: '480px',
                  width: '100%',
                }}
              >
                <img
                  src={generalTrainingImg}
                  alt="ClearEarth Safety Training Field Session"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Search & Category Filter Section */}
          <div
            id="training-catalog"
            style={{
              backgroundColor: 'var(--ce-white)',
              padding: '2.5rem',
              borderRadius: 'var(--ce-radius-lg)',
              border: '1px solid var(--ce-border)',
              boxShadow: 'var(--ce-shadow-md)',
              marginBottom: '3rem',
            }}
          >
            {/* Search Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--ce-navy-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                SEARCH TRAINING PROGRAMS
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ce-text-secondary)' }}>
                Filter instantly by training name or select a discipline below
              </p>
            </div>

            {/* Search Input Bar with Right-Side Filter Option */}
            <div
              style={{
                maxWidth: '780px',
                margin: '0 auto 2rem auto',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--ce-bg-main)',
                borderRadius: 'var(--ce-radius-full)',
                border: '2px solid var(--ce-border)',
                padding: '6px 10px 6px 18px',
                boxShadow: '0 2px 8px rgba(15, 39, 68, 0.06)',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {/* Left Search Icon */}
              <Search size={22} color="var(--ce-green-primary)" style={{ flexShrink: 0 }} />

              {/* Search Text Input */}
              <input
                type="text"
                aria-label="Search Training Programs"
                placeholder="Search training programs (e.g. fire, forklift, rigger)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '220px',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  fontSize: '0.98rem',
                  color: 'var(--ce-text-main)',
                  padding: '0.65rem 0',
                }}
              />

              {/* Clear Search Button */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--ce-text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                  }}
                >
                  <X size={18} />
                </button>
              )}

              {/* Right-Side Filter Option */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--ce-white)',
                  borderRadius: 'var(--ce-radius-full)',
                  padding: '4px 14px',
                  border: '1.5px solid var(--ce-border)',
                  boxShadow: '0 1px 4px rgba(15, 39, 68, 0.08)',
                  flexShrink: 0,
                }}
              >
                <SlidersHorizontal size={15} color="var(--ce-green-primary)" />
                <label htmlFor="category-select" style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--ce-navy-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Filter:
                </label>
                <select
                  id="category-select"
                  aria-label="Filter by category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--ce-navy-primary)',
                    cursor: 'pointer',
                    padding: '6px 2px',
                  }}
                >
                  {trainingCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Filter Pills (Exact requested list) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.65rem',
              }}
            >
              {trainingCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: 'var(--ce-radius-full)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: isSelected
                        ? '2px solid var(--ce-green-primary)'
                        : '1.5px solid var(--ce-border)',
                      backgroundColor: isSelected ? 'var(--ce-green-primary)' : 'var(--ce-white)',
                      color: isSelected ? 'var(--ce-white)' : 'var(--ce-navy-primary)',
                      boxShadow: isSelected ? '0 4px 10px rgba(0, 107, 62, 0.25)' : 'none',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter & Results Count Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.25rem',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--ce-border)',
              fontSize: '0.92rem',
              color: 'var(--ce-text-secondary)',
            }}
          >
            <div>
              Found <strong style={{ color: 'var(--ce-navy-primary)', fontSize: '1.05rem' }}>{filteredPrograms.length}</strong>{' '}
              courses
              {selectedCategory !== 'All' && (
                <span>
                  {' '}
                  in <strong>{selectedCategory}</strong>
                </span>
              )}
              {searchQuery && (
                <span>
                  {' '}
                  matching <em>"{searchQuery}"</em>
                </span>
              )}
            </div>

            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                style={{
                  color: 'var(--ce-green-primary)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Programs Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredPrograms.map((course) => (
              <div
                key={course.id}
                className="ce-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--ce-white)',
                  borderRadius: 'var(--ce-radius-lg)',
                  boxShadow: 'var(--ce-shadow-sm)',
                  border: '1px solid var(--ce-border)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <BookOpen size={16} color="var(--ce-green-primary)" />
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--ce-green-primary)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Training Program
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--ce-navy-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.35,
                    fontWeight: 800,
                  }}
                >
                  {course.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    color: 'var(--ce-text-secondary)',
                    marginBottom: '1.5rem',
                    flex: 1,
                  }}
                >
                  {course.description}
                </p>

                <div
                  style={{
                    padding: '0.85rem',
                    backgroundColor: 'var(--ce-bg-alt)',
                    borderRadius: 'var(--ce-radius-sm)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.825rem',
                  }}
                >
                  <Users size={16} color="var(--ce-navy-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--ce-navy-primary)' }}>Target Audience: </span>
                    <span style={{ color: 'var(--ce-text-secondary)' }}>{course.targetAudience}</span>
                  </div>
                </div>

                <Link
                  to={`/contact?service=Training:%20${encodeURIComponent(course.title)}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--ce-radius-sm)',
                    backgroundColor: 'var(--ce-navy-subtle)',
                    color: 'var(--ce-navy-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--ce-green-primary)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--ce-navy-subtle)';
                    e.currentTarget.style.color = 'var(--ce-navy-primary)';
                  }}
                >
                  <span>Enquire for this Course</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Zero Results State */}
          {filteredPrograms.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '4.5rem 1.5rem',
                backgroundColor: 'var(--ce-white)',
                borderRadius: 'var(--ce-radius-lg)',
                border: '1px solid var(--ce-border)',
                boxShadow: 'var(--ce-shadow-sm)',
              }}
            >
              <h4 style={{ color: 'var(--ce-navy-primary)', fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                No training programs found
              </h4>
              <p style={{ color: 'var(--ce-text-muted)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                No programs matched category "<strong>{selectedCategory}</strong>" and search "<strong>{searchQuery}</strong>".
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Search & Filters
              </Button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
