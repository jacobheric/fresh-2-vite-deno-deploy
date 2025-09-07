import { type Track } from "@/lib/spotify/placeholder.ts";
import { signal } from "@preact/signals";

export const SONGS = signal<Track[]>([]);
export const ERROR = signal<string | null>(null);
