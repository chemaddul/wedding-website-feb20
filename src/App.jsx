import React, { useState } from 'react';

const events = [
  {
    id: 'snathakam',
    name: 'Snathakam & Pradhanam',
    telugu: 'స్నాతకం / ప్రధానం',
    date: 'Friday, February 20, 2026',
    time: '10:00 AM onwards',
    mealNote: 'Lunch to follow',
    venue: 'Ahwanam Hall, Annapurna De Royale, Lakshmipuram Road',
    mapsLink: 'https://maps.google.com/?q=Annapurna+De+Royale+Lakshmipuram+Guntur',
    shortDesc: 'Sacred groom ceremonies & Panakala Kavidi',
    image: '🪷',
    rituals: [
      { name: 'Snathakam', desc: 'The groom\'s graduation ceremony marking his readiness for married life' },
      { name: 'Pradhanam', desc: 'Sacred rituals performed by the groom before the wedding' },
      { name: 'Panakala Kavidi', desc: 'Traditional ceremony where the groom carries sacred pots' },
      { name: 'Kashi Yatra', desc: 'Symbolic journey where the groom pretends to leave for Kashi, stopped by bride\'s family' }
    ],
    significance: 'These ceremonies mark Siddhartha\'s transition to a householder. The Snathakam symbolizes completion of brahmacharya (student life), while Pradhanam prepares him spiritually for marriage.'
  },
  {
    id: 'reception',
    name: 'Reception',
    telugu: 'రిసెప్షన్',
    date: 'Friday, February 20, 2026',
    time: '7:00 PM onwards',
    mealNote: 'Dinner to follow',
    venue: 'CK Convention, Mangalagiri',
    mapsLink: 'https://maps.google.com/?q=CK+Convention+Mangalagiri',
    shortDesc: 'Evening celebration with family & friends',
    image: '🎉',
    rituals: [],
    significance: 'The reception is a joyous celebration where Dhruthi and Siddhartha are introduced as a married couple to the extended family, friends, and community.'
  },
  {
    id: 'muhurtham',
    name: 'Muhurtham',
    telugu: 'ముహూర్తం',
    date: 'Friday, February 20, 2026',
    time: '11:29 PM',
    venue: 'CK Convention, Mangalagiri',
    mapsLink: 'https://maps.google.com/?q=CK+Convention+Mangalagiri',
    shortDesc: 'The sacred wedding ceremony',
    image: '💑',
    rituals: [
      { name: 'Kanyadaanam', desc: 'Dhruthi\'s parents give her hand to Siddhartha' },
      { name: 'Jeelakarra Bellam', desc: 'Couple places cumin and jaggery on each other\'s heads' },
      { name: 'Mangalsutra Dharana', desc: 'Siddhartha ties the sacred mangalsutra around Dhruthi\'s neck' },
      { name: 'Talambralu', desc: 'Showering of sacred rice on each other' },
      { name: 'Saptapadi', desc: 'Seven steps around the sacred fire' }
    ],
    significance: 'The Muhurtham at 11:29 PM is the most auspicious moment when Dhruthi and Siddhartha unite as one.'
  }
];

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FDF6E3 0%, #FFF8E7 50%, #FFFBF0 100%)' }}>
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Header */}
      <header className="relative pt-8 pb-16 text-center">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(90deg, #8B4513, #D4AF37, #8B4513)' }} />

        {/* Lord Balaji Namam */}
        <img src="/balaji-namam.svg" alt="Lord Balaji Namam" className="w-20 h-24 mx-auto mb-4" />

        {/* Venkateshwara Namalu */}
        <p className="text-lg mb-2" style={{ color: '#800020', fontFamily: 'serif', fontWeight: '600' }}>
          ॐ నమో వేంకటేశాయ
        </p>

        {/* Host Names */}
        <p className="text-lg font-semibold mb-1" style={{ color: '#8B4513' }}>
          Dr. Maddula Gopala Nagakishore & Dr. Maddula Sunitha
        </p>
        <p className="text-xl mb-4" style={{ color: '#8B4513' }}>
          cordially invite you to the wedding of
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{
          color: '#8B4513',
          fontFamily: 'Georgia, serif',
          textShadow: '2px 2px 4px rgba(139, 69, 19, 0.2)'
        }}>
          Dhruthi & Siddhartha
        </h1>

        {/* Telugu Names */}
        <p className="text-2xl" style={{ color: '#B8860B', fontFamily: 'serif' }}>
          ధృతి 💕 సిద్ధార్థ
        </p>

        {/* Date Banner */}
        <div className="mt-6 inline-block px-8 py-3 rounded-full" style={{
          background: 'linear-gradient(135deg, #8B4513, #A0522D)',
          boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)'
        }}>
          <p className="text-white text-lg font-semibold">February 20, 2026 • Guntur</p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <div className="h-px w-24" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
          <span className="text-2xl">✦</span>
          <div className="h-px w-24" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
        </div>
      </header>

      {/* Events Section */}
      <section className="px-4 pb-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
          Wedding Celebrations
        </h2>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, #FFFFFF, #FFF8E7)',
                borderRadius: '20px',
                border: '2px solid #D4AF37',
                boxShadow: '0 8px 30px rgba(139, 69, 19, 0.15)',
                overflow: 'hidden'
              }}
            >
              {/* Card Header */}
              <div className="p-6" style={{
                background: index % 2 === 0
                  ? 'linear-gradient(135deg, #8B4513, #A0522D)'
                  : 'linear-gradient(135deg, #800020, #A52A2A)'
              }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                    <p className="text-yellow-200 text-lg">{event.telugu}</p>
                  </div>
                  <span className="text-5xl">{event.image}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="space-y-3" style={{ color: '#5D4037' }}>
                  <p className="flex items-center gap-3 text-lg font-medium">
                    <span className="text-xl">📅</span> {event.date}
                  </p>
                  <p className="flex items-center gap-3 text-lg font-medium">
                    <span className="text-xl">⏰</span> {event.time}{event.mealNote && <span className="text-sm italic" style={{ color: '#8B4513' }}> • {event.mealNote}</span>}
                  </p>
                  <a
                    href={event.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-start gap-3 text-lg font-medium hover:underline"
                    style={{ color: '#1a73e8' }}
                  >
                    <span className="text-xl">📍</span> {event.venue}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
            style={{
              border: '3px solid #D4AF37',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 p-6 text-white" style={{
              background: 'linear-gradient(135deg, #8B4513, #A0522D)',
              borderRadius: '20px 20px 0 0'
            }}>
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-white hover:text-yellow-200 text-2xl font-bold"
              >
                ✕
              </button>
              <div className="flex items-center gap-4">
                <span className="text-6xl">{selectedEvent.image}</span>
                <div>
                  <h3 className="text-3xl font-bold">{selectedEvent.name}</h3>
                  <p className="text-yellow-200 text-xl">{selectedEvent.telugu}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl text-center" style={{ background: '#FFF8DC', border: '1px solid #D4AF37' }}>
                  <p className="text-2xl mb-1">📅</p>
                  <p className="font-semibold" style={{ color: '#8B4513' }}>{selectedEvent.date}</p>
                </div>
                <div className="p-4 rounded-xl text-center" style={{ background: '#FFF8DC', border: '1px solid #D4AF37' }}>
                  <p className="text-2xl mb-1">⏰</p>
                  <p className="font-semibold" style={{ color: '#8B4513' }}>{selectedEvent.time}</p>
                  {selectedEvent.mealNote && <p className="text-sm italic mt-1" style={{ color: '#A0522D' }}>{selectedEvent.mealNote}</p>}
                </div>
                <a
                  href={selectedEvent.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl text-center block hover:shadow-lg transition-shadow"
                  style={{ background: '#FFF8DC', border: '1px solid #D4AF37' }}
                >
                  <p className="text-2xl mb-1">📍</p>
                  <p className="font-semibold hover:underline" style={{ color: '#1a73e8' }}>{selectedEvent.venue}</p>
                  <p className="text-xs mt-1" style={{ color: '#666' }}>Open in Maps</p>
                </a>
              </div>

              {/* Significance */}
              <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, #FDF5E6, #FAEBD7)', border: '1px solid #DEB887' }}>
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#8B4513' }}>
                  <span>✨</span> Significance
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedEvent.significance}</p>
              </div>

              {/* Rituals */}
              {selectedEvent.rituals.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: '#8B4513' }}>
                    <span>🪔</span> Rituals & Ceremonies
                  </h4>
                  <div className="space-y-3">
                    {selectedEvent.rituals.map((ritual, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white" style={{ border: '1px solid #E8D4B8' }}>
                        <p className="font-semibold" style={{ color: '#800020' }}>{ritual.name}</p>
                        <p className="text-gray-600 text-sm mt-1">{ritual.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-6 text-center" style={{ borderTop: '1px solid #E8D4B8' }}>
              <p style={{ color: '#8B4513' }}>
                We look forward to celebrating with you! 🙏
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 text-center" style={{
        background: 'linear-gradient(135deg, #8B4513, #A0522D)',
        borderTop: '3px solid #D4AF37'
      }}>
        <p className="text-yellow-200 text-lg mb-2">
          మీ ఆశీర్వాదాలతో మా జీవితం పండుగ అవుతుంది
        </p>
        <p className="text-white">
          Your blessings make our life a celebration
        </p>
        <div className="mt-4 flex justify-center gap-4 text-2xl">
          <span>🪷</span>
          <span>💕</span>
          <span>🪷</span>
        </div>
      </footer>
    </div>
  );
}
