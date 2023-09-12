import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type contentType = {
  isFirstInit: boolean;
  language: string;
  authToken: string;
};
const storage = createJSONStorage<contentType>(() => AsyncStorage);
const content: contentType = {
  isFirstInit: true,
  language: 'en',
  authToken: '',
};
export const storageAtom = atomWithStorage('storage', content, storage);
