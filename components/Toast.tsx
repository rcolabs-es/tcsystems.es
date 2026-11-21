'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

export type ToastData = { type: 'error' | 'success'; title: string; message?: string };

/**
 * Aviso flotante abajo a la derecha (abajo del todo en móvil). Se monta en
 * <body> con un portal para que ningún contenedor con transform lo descoloque.
 */
export default function Toast({
  toast,
  onClose,
  duration = 7000,
}: {
  toast: ToastData | null;
  onClose: () => void;
  duration?: number;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [toast, onClose, duration]);

  if (!mounted || !toast) return null;

  const isError = toast.type === 'error';
  const Icon = isError ? AlertCircle : CheckCircle;

  return createPortal(
    <div
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
      className="fixed z-[100] bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[380px] flex items-start gap-3 rounded-2xl border bg-white dark:bg-zinc-900 p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300 border-gray-200 dark:border-zinc-700"
    >
      <span
        className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center ${
          isError ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'
        }`}
      >
        <Icon className="w-5 h-5" aria-hidden />
      </span>
      <div className="flex-1 pt-0.5">
        <p className="font-semibold text-gray-900 dark:text-white">{toast.title}</p>
        {toast.message && (
          <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">{toast.message}</p>
        )}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar aviso"
        className="shrink-0 rounded-lg p-1 text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>,
    document.body
  );
}
