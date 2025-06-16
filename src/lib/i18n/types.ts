// This file provides types for the message structure
// In a real project, you might want to generate this from the JSON files

import type enMessages from './messages/en.json';

// Extract the message structure type from the English messages
export type MessageStructure = typeof enMessages;

// Helper type to create a dot-notation path type
type PathImpl<T, K extends keyof T> = K extends string ? (T[K] extends Record<string, any> ? (T[K] extends ArrayLike<any> ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}` : K | `${K}.${PathImpl<T[K], keyof T[K]>}`) : K) : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

// Extract all possible message paths
export type MessagePath = Path<MessageStructure>;

// Helper to get the type of a message value by its path
type GetMessageType<T, P extends string> = P extends `${infer K}.${infer Rest}` ? (K extends keyof T ? (T[K] extends Record<string, any> ? GetMessageType<T[K], Rest> : never) : never) : P extends keyof T ? T[P] : never;

// Type for the message function that includes parameters
export type MessageFunction<T = any> = T extends string ? T | ((params: Record<string, any>) => string) : T;
