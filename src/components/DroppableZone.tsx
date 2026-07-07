import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { cn } from './DraggableCard';

interface DroppableZoneProps {
  id: string;
  title: string;
  colorTheme: 'safe' | 'depends' | 'risk';
  children: React.ReactNode;
}

export function DroppableZone({ id, title, colorTheme, children }: DroppableZoneProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const themes = {
    safe: {
      wrapper: "bg-emerald-50/50 border-emerald-100",
      dot: "bg-emerald-500 shadow-emerald-200",
      text: "text-emerald-900",
    },
    depends: {
      wrapper: "bg-amber-50/50 border-amber-100",
      dot: "bg-amber-500 shadow-amber-200",
      text: "text-amber-900",
    },
    risk: {
      wrapper: "bg-rose-50/50 border-rose-100",
      dot: "bg-rose-500 shadow-rose-200",
      text: "text-rose-900",
    }
  };

  const theme = themes[colorTheme];

  return (
    <div className={cn("flex flex-col rounded-2xl border-2 p-4 overflow-hidden", theme.wrapper)}>
      <div className="flex items-center gap-2 mb-3">
        <div className={cn("w-3 h-3 rounded-full shadow-sm", theme.dot)}></div>
        <h2 className={cn("font-bold uppercase text-xs tracking-wider m-0", theme.text)}>{title}</h2>
      </div>
      
      <div 
        ref={setNodeRef} 
        className={cn(
          "flex-grow flex flex-col gap-2 p-2 bg-white/40 rounded-xl transition-colors min-h-[160px]",
          isOver && "bg-indigo-600/10 border-2 border-dashed border-indigo-500"
        )}
      >
        {children}
      </div>
    </div>
  );
}
