// // "use client";

// // import React, { useRef, useState, useEffect } from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { cn } from "@/lib/utils";

// // interface StickyScrollRevealProps {
// //   items: {
// //     title: string;
// //     content: string;
// //   }[];
// // }

// // export function StickyScrollReveal({ items }: StickyScrollRevealProps) {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     if (!container) return;

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const index = parseInt(
// //               entry.target.getAttribute("data-index") || "0",
// //               10
// //             );
// //             setActiveIndex(index);
// //           }
// //         });
// //       },
// //       { threshold: 0.5, rootMargin: "-50% 0px -50% 0px" }
// //     );

// //     const triggers = container.querySelectorAll(".scroll-trigger");
// //     triggers.forEach((trigger) => observer.observe(trigger));

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div ref={containerRef} className="">
// //       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
// //         <div className="relative w-full max-w-lg">
// //           {items.map((item, index) => (
// //             <Card
// //               key={index}
// //               className={cn(
// //                 "absolute top-1/2 left-1/2 w-full -translate-x-1/2 transition-all duration-500 ease-out",
// //                 index === activeIndex
// //                   ? "opacity-100 -translate-y-1/2 rotate-0 z-20"
// //                   : index < activeIndex
// //                   ? "opacity-0 -translate-y-full -rotate-6 z-10"
// //                   : "opacity-100 -translate-y-1/2 rotate-6 z-0"
// //               )}
// //               style={{
// //                 transform: `
// //                   translate(-50%, ${50 * (index - activeIndex)}%)
// //                   rotate(${6 * (index - activeIndex)}deg)
// //                   scale(${1 - 0.05 * Math.abs(index - activeIndex)})
// //                 `,
// //               }}
// //             >
// //               <CardHeader>
// //                 <CardTitle>{item.title}</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <p>{item.content}</p>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //       {items.map((_, index) => (
// //         <div
// //           key={index}
// //           data-index={index}
// //           className="scroll-trigger h-screen"
// //           aria-hidden="true"
// //         />
// //       ))}
// //     </div>
// //   );
// // }


// // 'use client'

// // import React, { useRef, useState, useEffect } from 'react'
// // import { Card } from './card'
// // import { cn } from '@/lib/utils'

// // interface StickyScrollRevealProps {
// //   items: {
// //     title: string
// //     content: string
// //   }[]
// // }

// // export function StickyScrollReveal({ items }: StickyScrollRevealProps) {
// //   const containerRef = useRef<HTMLDivElement>(null)
// //   const [activeIndex, setActiveIndex] = useState(0)

// //   useEffect(() => {
// //     const container = containerRef.current
// //     if (!container) return

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const index = parseInt(entry.target.getAttribute('data-index') || '0', 10)
// //             setActiveIndex(index)
// //           }
// //         })
// //       },
// //       { threshold: 0.5 }
// //     )

// //     const triggers = container.querySelectorAll('.scroll-trigger')
// //     triggers.forEach((trigger) => observer.observe(trigger))

// //     return () => observer.disconnect()
// //   }, [])

// //   return (
// //     <div ref={containerRef} className="relative min-h-screen">
// //       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
// //         <div className="w-full max-w-5xl mx-auto px-4">
// //           {items.map((item, index) => (
// //             <Card
// //               key={index}
// //               className={cn(
// //                 'absolute top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out',
// //                 index === activeIndex
// //                   ? 'opacity-100 translate-y-0 rotate-0 z-20'
// //                   : index < activeIndex
// //                   ? 'opacity-0 -translate-y-full -rotate-12 z-10'
// //                   : 'opacity-0 translate-y-full rotate-12 z-0'
// //               )}
// //             >
// //               <div className="p-6">
// //                 <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
// //                 <p>{item.content}</p>
// //               </div>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //       {items.map((_, index) => (
// //         <div
// //           key={index}
// //           data-index={index}
// //           className="scroll-trigger h-screen"
// //           aria-hidden="true"
// //         />
// //       ))}
// //     </div>
// //   )
// // }


// 'use client'

// import React, { useRef, useState, useEffect } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { cn } from '@/lib/utils'

// interface StickyScrollRevealProps {
//   items: {
//     title: string
//     content: string
//   }[]
// }

// export function StickyScrollReveal({ items }: StickyScrollRevealProps) {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [activeIndex, setActiveIndex] = useState(0)

//   useEffect(() => {
//     const container = containerRef.current
//     if (!container) return

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.getAttribute('data-index') || '0', 10)
//             setActiveIndex(index)
//           }
//         })
//       },
//       { 
//         threshold: 0.5, 
//         // Adjust root margin to control when cards change
//         rootMargin: '-25% 0px -25% 0px' 
//       }
//     )

//     const triggers = container.querySelectorAll('.scroll-trigger')
//     triggers.forEach((trigger) => observer.observe(trigger))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div ref={containerRef} className="relative min-h-screen">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         <div className="relative w-full max-w-lg">
//           {items.map((item, index) => (
//             <Card
//               key={index}
//               className={cn(
//                 'absolute top-1/2 left-1/2 w-full transition-all duration-500 ease-out',
//                 // Base styling for all cards
//                 'shadow-lg border border-border/50 hover:shadow-xl'
//               )}
//               style={{
//                 opacity: index === activeIndex ? 1 : 
//                          index < activeIndex ? 0.5 : 0.5,
//                 transform: `
//                   translate(-50%, 
//                     ${index === activeIndex 
//                       ? '-50%' 
//                       : index < activeIndex 
//                         ? `-${(activeIndex - index) * 20}%` 
//                         : `${(index - activeIndex) * 20}%`}
//                   )
//                   rotate(${
//                     index === activeIndex 
//                       ? 0 
//                       : index < activeIndex 
//                         ? `-${(activeIndex - index) * 5}deg` 
//                         : `${(index - activeIndex) * 5}deg`
//                   })
//                   scale(${
//                     index === activeIndex 
//                       ? 1 
//                       : 1 - Math.abs(index - activeIndex) * 0.1
//                   })
//                 `,
//                 zIndex: items.length - Math.abs(index - activeIndex),
//                 transformOrigin: 'center center'
//               }}
//             >
//               <CardHeader>
//                 <CardTitle className="text-xl font-semibold">
//                   {item.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">
//                   {item.content}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//       {items.map((_, index) => (
//         <div
//           key={index}
//           data-index={index}
//           className="scroll-trigger h-screen"
//           aria-hidden="true"
//         />
//       ))}
//     </div>
//   )
// }


'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface StickyScrollRevealProps {
  items: {
    title: string
    content: string
    color?: string
  }[]
}

export function StickyScrollReveal({ items }: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10)
            setActiveIndex(index)
          }
        })
      },
      { 
        threshold: 0.5, 
        rootMargin: '-25% 0px -25% 0px' 
      }
    )

    const triggers = container.querySelectorAll('.scroll-trigger')
    triggers.forEach((trigger) => observer.observe(trigger))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-lg">
          {items.map((item, index) => (
            <Card
              key={index}
              className={cn(
                'absolute top-1/2 left-1/2 w-full h-80 transition-all duration-500 ease-out',
                'shadow-lg border border-border/50 hover:shadow-xl'
              )}
              style={{
                opacity: index === activeIndex ? 1 : 
                         index < activeIndex ? 0 : 0.5,
                backgroundColor: item.color || 'white',
                transform: `
                  translate(-50%, 
                    ${index === activeIndex 
                      ? '-50%' 
                      : index < activeIndex 
                        ? `-${100 + (activeIndex - index) * 50}%` 
                        : `${(index - activeIndex) * 20}%`}
                  )
                  rotate(${
                    index === activeIndex 
                      ? 0 
                      : index < activeIndex 
                        ? `-${(activeIndex - index) * 5}deg` 
                        : `${(index - activeIndex) * 5}deg`
                  })
                  scale(${
                    index === activeIndex 
                      ? 1 
                      : 1 - Math.abs(index - activeIndex) * 0.1
                  })
                `,
                zIndex: items.length - Math.abs(index - activeIndex),
                transformOrigin: 'center center'
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-black">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black/70">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {items.map((_, index) => (
        <div
          key={index}
          data-index={index}
          className="scroll-trigger h-screen"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}