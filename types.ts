
// Fix: Use vite/client reference to provide types for images and other assets,
// which avoids "Invalid module name in augmentation" errors when declaring wildcard modules in a file that has exports.
/// <reference types="vite/client" />

export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  difficulty: 'سهل' | 'متوسط' | 'صعب';
}

export interface ContactDetail {
  type: 'phone' | 'email' | 'address';
  value: string;
  label?: string;
}

/**
 * ملاحظة: تمت إزالة التعريفات اليدوية لـ "*.png" وغيرها لأنها تسبب تعارضاً مع نظام الوحدات (Modules) في TypeScript.
 * الاعتماد الآن على تعريفات Vite الافتراضية المضمنة عبر الـ reference أعلاه.
 */
