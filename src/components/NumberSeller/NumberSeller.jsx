import React, { useEffect, useRef } from 'react'
import './numberSeller.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NumberSeller({ block_state }) {
  const wrapper = useRef()
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 570

  useEffect(() => {
    const imgArr = gsap.utils.selector(wrapper)('.number-seller__img')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 30%',
        end: 'bottom top',
        scrub: false,
        markers: false,
        pin: false,
      }
    })

    imgArr.forEach((img) => {
      tl.fromTo(img, {
        scale: 0,
      }, {
        delay: Math.random(),
        scale: 1,
      }, 0)
    })

    const number = gsap.utils.selector(wrapper)('.number-seller__number')

    tl.from(number, {
      textContent: isDesktop ? 48000 : 10,
      duration: 1.5,
      ease: 'power1.in',
      snap: { textContent: isDesktop ? 10 : 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.targets()[0].innerHTML =
            (+this.targets()[0].textContent).toLocaleString('ru-RU') +
            (isDesktop ? '' : 'k')
        },
      }
    }, 0)
  }, [isDesktop])

  return (
    <section className='section number-seller' ref={wrapper}>
      <div className="container">
        <div
          className="number-seller__title title h2"
          dangerouslySetInnerHTML={{ __html: block_state.title }}
        />

        <div className="number-seller__wrapper">
          <div className="number-seller__body">
            <div className="number-seller__number">
              {isDesktop ? block_state.number : block_state.number / 1000}
            </div>

            <div className="number-seller__number-after">
              {block_state.number_after}
            </div>
          </div>

          <div
            className="number-seller__label h2"
            dangerouslySetInnerHTML={{ __html: block_state.label }}
          />

          <div className="number-seller__authors">
            {block_state.img_list.map((img, i) => (
              <div key={i} className="number-seller__img">
                <img src={img.img} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}