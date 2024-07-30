import { Metadata } from 'next';
import React from 'react'
import {TestComponent} from '@site/components/index'
import TeaxtComponent2 from '../components/TestComponent'
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Video Tips Page",
  keywords: "video tips",  
};

export default function index() {
  return (
    <div className=''>
      {/* @ts-ignore */}
      <span text="#008c8c 18px">video-tips123</span>
      <div ><TestComponent /></div>
      <div><TeaxtComponent2 /></div>
    </div>
  )
}
