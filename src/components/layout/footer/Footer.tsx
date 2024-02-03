import React from 'react'
import { montMed } from '@/styles/fontes/Fontes'
type Props = {}

function Footer({}: Props) {
  return (
    <div className={`${montMed.className} text-[12px] flex justify-center`}>MKS sistemas © Todos os direitos reservados</div>
  )
}

export default Footer