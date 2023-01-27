import Image from 'next/image'
import { Inter } from '@next/font/google'
import  StubNavbarb  from '../../components/concrete/StubNavbar'
import {  Chart } from '../../components/MyPlot'
import { Button } from '../../components/Button'
const inter = Inter({ subsets: ['latin'] })
import { UseBootstrap } from '@/components/bootstraphook'

export default function Home() {
  return (
    <UseBootstrap>
    <StubNavbarb/>
    <Button label={''} onClick={undefined}/>
    <Chart />
    <StubNavbarb/>
    
    </UseBootstrap>
  )
}
