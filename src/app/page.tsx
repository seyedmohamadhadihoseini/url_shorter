"use client"
import { store } from './store'
import { Provider } from 'react-redux'
import InputPart from "./input";
import OutputPart from "./output";
import { Toaster } from '@/components/ui/toaster';
export default function Home() {
  return (
    <Provider store={store}>
      <form className='main-content'>
        <div>
        <InputPart />
        <OutputPart />

        </div>
      </form>
      <Toaster />
    </Provider>
  );
}
