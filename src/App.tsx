import { useEffect, useState } from 'react';
import { DndContext, DragEndEvent, DragStartEvent, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { getRandomCards, CardData, Category } from './data';
import { DraggableCard } from './components/DraggableCard';
import { DroppableZone } from './components/DroppableZone';
import { cn } from './components/DraggableCard';
import { useDroppable } from '@dnd-kit/core';

type ZoneId = "pool" | Category;

interface GameCard extends CardData {
  zone: ZoneId;
}

function PoolZone({ children }: { children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'pool',
  });

  return (
    <section className="bg-white/60 backdrop-blur-md rounded-2xl border-2 border-dashed border-slate-300 p-4 min-h-[180px]">
      <div className="text-center mb-4">
        <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full uppercase">Skenario Tersedia</span>
      </div>
      <div
        ref={setNodeRef}
        className={cn(
          "flex flex-wrap justify-center gap-3 min-h-[100px] transition-colors rounded-xl p-2",
          isOver && "bg-indigo-600/10 border-2 border-dashed border-indigo-500"
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const newCards = getRandomCards(12);
    setCards(newCards.map(c => ({ ...c, zone: "pool" })));
    setIsChecked(false);
    setScore(null);
  };

  const checkAnswers = () => {
    let correct = 0;
    cards.forEach(card => {
      if (card.zone !== "pool" && card.zone === card.cat) {
        correct++;
      }
    });
    setScore(correct);
    setIsChecked(true);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    
    if (active.id && over.id) {
      setCards((prev) => 
        prev.map(c => 
          c.id === active.id ? { ...c, zone: over.id as ZoneId } : c
        )
      );
    }
  };

  const poolCards = cards.filter(c => c.zone === "pool");
  const safeCards = cards.filter(c => c.zone === "aman");
  const dependsCards = cards.filter(c => c.zone === "tergantung");
  const unsafeCards = cards.filter(c => c.zone === "tidak_aman");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 sm:px-8 sm:py-6 bg-white border-b border-slate-200 shadow-sm gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 m-0">
            Aman atau <span className="text-indigo-600">Tidak Aman?</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1 mb-0">Pindahkan kartu jejak digital ke zona penilaian yang tepat.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Skor</span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-indigo-600">
              {score !== null ? `${score} / ${cards.length}` : `0 / ${cards.length}`}
            </span>
          </div>
          <button 
            onClick={checkAnswers}
            disabled={isChecked}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border-none cursor-pointer"
          >
            Cek Jawaban
          </button>
          <button 
            onClick={initGame}
            className="p-2 sm:p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all cursor-pointer text-slate-600"
            aria-label="Mulai Ulang"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18L6 14L10 18"/><path d="M2 6L6 10L10 6"/><path d="M6 10V4"/><path d="M6 14v6"/><path d="M22 18l-4-4-4 4"/><path d="M22 6l-4 4-4-4"/><path d="M18 10V4"/><path d="M18 14v6"/></svg>
          </button>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row flex-grow p-4 sm:p-6 gap-6 max-w-[1400px] w-full mx-auto">
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          {/* Card Pool Area */}
          <div className="w-full lg:w-1/2 flex flex-col min-h-[400px]">
            <PoolZone>
              {poolCards.length === 0 && (
                <div className="text-slate-400 text-base flex items-center justify-center w-full h-full min-h-[50px]">
                  Semua kartu sudah dipindahkan.
                </div>
              )}
              {poolCards.map(card => (
                <DraggableCard 
                  key={card.id} 
                  id={card.id} 
                  text={card.t} 
                  reason={card.why}
                  cat={card.cat}
                  isChecked={isChecked}
                  currentZone={card.zone}
                />
              ))}
            </PoolZone>
          </div>

          {/* Drop Zones */}
          <section className="w-full lg:w-1/2 flex flex-col gap-6">
            <DroppableZone 
              id="aman" 
              title="Aman Dibagikan" 
              colorTheme="safe"
            >
              {safeCards.map(card => (
                <DraggableCard 
                  key={card.id} 
                  id={card.id} 
                  text={card.t} 
                  reason={card.why}
                  cat={card.cat}
                  isChecked={isChecked}
                  currentZone={card.zone}
                />
              ))}
            </DroppableZone>
            
            <DroppableZone 
              id="tergantung" 
              title="Tergantung / Hati-hati" 
              colorTheme="depends"
            >
              {dependsCards.map(card => (
                <DraggableCard 
                  key={card.id} 
                  id={card.id} 
                  text={card.t} 
                  reason={card.why}
                  cat={card.cat}
                  isChecked={isChecked}
                  currentZone={card.zone}
                />
              ))}
            </DroppableZone>
            
            <DroppableZone 
              id="tidak_aman" 
              title="Risiko Tinggi / Privat" 
              colorTheme="risk"
            >
              {unsafeCards.map(card => (
                <DraggableCard 
                  key={card.id} 
                  id={card.id} 
                  text={card.t} 
                  reason={card.why}
                  cat={card.cat}
                  isChecked={isChecked}
                  currentZone={card.zone}
                />
              ))}
            </DroppableZone>
          </section>
        </DndContext>
      </main>

      <footer className="px-6 py-4 bg-slate-900 text-slate-400 text-xs flex flex-col sm:flex-row justify-between items-center mt-auto">
        <span>TIMEDOOR ACADEMY &copy; Aktivitas Oversharing & Jejak Digital</span>
        <span className="mt-2 sm:mt-0">v2.1 - Interactive Logic Enabled</span>
      </footer>
    </div>
  );
}

