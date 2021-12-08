/**
 * Typed wrapper for LocalStorage.
 */
class StorageService {
  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T | null {
    const data: any = localStorage.getItem(key);
    if (!data) return null;

    let obj: T | null;

    try {
      obj = JSON.parse(data) as T;
    } catch (error) {
      obj = null;
    }

    return obj;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export const storageService = new StorageService();
