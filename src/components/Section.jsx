import React from 'react'

export default function Section({titie, children, ...props}) {
  return (
    <section {...props}>
      <h2>{titie}</h2>
      {children}
    </section>
  )
}
