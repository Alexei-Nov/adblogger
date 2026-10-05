import React from 'react'
import './notFound.css'

export default function NotFound() {
  return (
    <>
      <section className='section not-found'>
        <div className="container">
          <div className="not-found__wrapper">
            <div className="not-found__error">
              <div className="not-found__error-num">4</div>
              <div className="not-found__error-img">
                <img src="/img/not-found/img-1.png" alt="img" />
              </div>
              <div className="not-found__error-num">4</div>
            </div>
            <div className="not-found__title text-32 fw-500">страница не найдена</div>
            <div className="not-found__desc">и не факт что она здесь была</div>
            <a href='/' className="not-found__btn btn btn_border btn_small text-18 fw-500" >
              Перейти на главную
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
