'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

function Banner() {
  return (
    // <!-- Start Hero Section -->
    <div className="bg-greenBanner pt-[98px] lg:pr-0 x:pb-36 lg:pb-0 lg:mt-[88px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
          <div className="lg:w-[42%] w-full px-3">
            <div className="relative max-w-md z-[4]">
              <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">Los Chasquis <br /><span className="d-block">Diseño a medida</span></h1>
              <p className="text-paragraph text-sm mb-10 leading-6">
                Somos la elección preferida en la creación de muebles a medida para aquellos que buscan la excelencia en diseño y artesanía. Nuestra empresa se destaca como la mejor opción entre las opciones del mercado, fusionando la innovación
                contemporánea con la meticulosa artesanía.
              </p>
              <p className="mb-4">
                <Link href="/contact" className="btn bg-secondary font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] mr-2">Cotizar ahora</Link>
                <Link href="/shop" className="btn border-2 border-btn font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px]">Explorar</Link>
              </p>
            </div>
          </div>
          <div className="flex relative lg:w-[58%] w-full">
            <div className="hidden lg:block xs:overflow-x-hidden after:absolute x:after:w-[255px] x:after:h-[217px] lg:after:w-[255px] lg:after:h-[217px] after:bg-bannerRight after:bg-contain after:bg-no-repeat after:right-[-60px] lg:after:right-[0px] lg:after:top-[-20px] x:after:right-[-60px] x:after:top-[-60px] xl:after:right-[0px] 2xl:after:right-[-60px]">
              <img src="assets/muebles/mesa_para_tv.png" className="x:absolute lg:relative left-0 x:max-w-[780px] xl:max-w-[680px] 2xl:max-w-[780px] lg:max-w-[650px] h-auto align-middle box-border z-[2] x:top-[-100px] lg:top-[-50px] lg:right-[-100px]" />
            </div>

            <div className="lg:hidden xs:overflow-x-hidden after:absolute xs:after:w-[220px] xs:after:h-[192px] after:bg-bannerRight after:bg-contain after:bg-no-repeat after:right-[-60px] xs:after:right-0 xs:after:top-[60px] xs:mt-20">
              <img src="assets/muebles/mesa_para_tv.png" className="relative left-0 xs:max-w-[500px] h-full align-middle box-border z-[1] xs:top-[0px] xs:right-[0px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- End Hero Section -->
  );
}

interface Props {
  image: string
  name: String
  price: String
}

function Item(props: Props) {
  const imgProduct = useRef<HTMLImageElement>(null);
  const btnPlus = useRef<HTMLSpanElement>(null);
  const background = useRef<HTMLButtonElement>(null);
  const description = useRef<HTMLHeadingElement>(null);
  const nameProduct = useRef<HTMLHeadingElement>(null);
  const btnCotizar = useRef<HTMLParagraphElement>(null);

  const addElementsProduct = () => {
    imgProduct.current?.classList.remove('translate-y-0')
    imgProduct.current?.classList.add('opacity-100', '-translate-y-10')
    background.current?.classList.add('transform', 'opacity-100', 'scale-y-100')
    btnPlus.current?.classList.add('translate-y-1/2', 'duration-500', 'opacity-100')
  };

  const quitElementsProduct = () => {    
    imgProduct.current?.classList.remove('opacity-100', '-translate-y-10')
    imgProduct.current?.classList.add('translate-y-0')
    background.current?.classList.remove('transform', 'opacity-100', 'scale-y-100')
    btnPlus.current?.classList.remove('translate-y-1/2', 'duration-500', 'opacity-100')
  };

  function goToContact() {
    window.location.href = "/contact#formulario"
  }

  function showDescription() {
    nameProduct.current?.classList.add('hidden')
    btnCotizar.current?.classList.add('hidden')
    description.current?.classList.remove('hidden')
  }

  const hideDescription = () => {
    nameProduct.current?.classList.remove('hidden')
    btnCotizar.current?.classList.remove('hidden')
    description.current?.classList.add('hidden')
  }

  return (
    <div className="w-full lg:w-1/4 mb-0 px-3 mt-11 lg:mt-0" onMouseEnter={(e) => window.innerWidth >= 480 ? addElementsProduct() : null} onMouseLeave={quitElementsProduct}>
      <button className="text-center block relative pb-[50px]  cursor-pointer bottom-0  after:absolute" >
        {/* fondo */}
        <span ref={background} className="w-full bottom-0 left-0 h-3/4 bg-products absolute rounded-[10px] transition-all duration-500 ease-in-out origin-bottom scale-y-0 opacity-0 "></span>
        {/* imagen */}
        <img ref={imgProduct} src={props.image} className="max-w-full h-auto align-middle mb-[30px] top-0 relative transform transition-all duration-500 ease-in-out" />
        {/* texto */}
        <h3 ref={nameProduct} className="text-primary font-semibold text-base leading-5 mb-2 mt-0 relative">{props.name}</h3>
        {/* description */}
        <h3 ref={description} className="hidden text-primary h-[70px] -mt-[15px] text-center text-base leading-5 mb-2 relative">
          {props.name}
        </h3>

        {/* <strong className="text-primary font-extrabold text-lg relative">S/ {props.price}</strong> */}
        <p ref={btnCotizar} className="text-center relative pt-3" onClick={goToContact}><Link href="/contact" className="font-extrabold pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-primary bg-secondary border-primary">Cotizar</Link></p>

        {/* boton plus */}
        {/* <a href=""> */}
        <span ref={btnPlus} onMouseEnter={showDescription} onMouseLeave={hideDescription} className="flex absolute w-9 h-9 left-[46%] bg-primary bottom-4 mb-[-17.5px] text-center items-center rounded-[50%] transition-products opacity-0">
          <img src="assets/cross.svg" className="w-4 h-4 max-w-full mx-auto" />
        </span>
        {/* </a> */}

      </button>
    </div>
  );
}

function Products() {
  // const product = useRef<HTMLDivElement>(null);
  // const background = useRef<HTMLButtonElement>(null);
  // const imgProduct = useRef<HTMLImageElement>(null);
  // const btnPlus = useRef<HTMLSpanElement>(null);
  // const bckgPrueba = useRef<HTMLButtonElement>(null);

  // const addElementsProduct = () => {
  //   imgProduct.current?.classList.add('ease-in-out', 'duration-500', 'translate-y-0', 'opacity-100', '-top-7')
  //   bckgPrueba.current?.classList.add('transform', 'opacity-100', 'scale-y-100')
  //   btnPlus.current?.classList.add('translate-y-1/2', 'duration-500', 'opacity-100')
  // };

  // const quitElementsProduct = () => {
  //   imgProduct.current?.classList.remove('ease-in-out', 'duration-500', 'translate-y-0', 'opacity-100', '-top-7')
  //   bckgPrueba.current?.classList.remove('transform', 'opacity-100', 'scale-y-100')
  //   btnPlus.current?.classList.remove('translate-y-1/2', 'duration-500', 'opacity-100')
  // };

  return (
    <div className="pt-28 lg:pb-28 pb-0">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 lg:ml-[-0.75] lg:mr-[-0.75] xs:mx-3">

          {/* <!-- Start Column 1 --> */}
          <div className="w-full lg:w-1/4 mb-0">
            <h2 className="mb-6 text-2xl mt-0 font-medium leading-[1.2] text-primary text-center lg:text-left">Elaborado con excelete material.</h2>
            <p className="mb-6 mt-0 text-center lg:text-left">
              Nuestros productos destacan por estar fabricados con las mejores maderas, garantizando una calidad superior y un acabado impecable. Cada detalle refleja nuestro compromiso con la excelencia en la creación de muebles duraderos y visualmente atractivos.
            </p>
            <p className="xs:text-center lg:text-left"><Link href="/shop" className="font-semibold pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-white bg-primary border-primary">Explorar</Link></p>
          </div>
          {/* <!-- End Column 1 --> */}

          {/* <!-- Start Column 2 --> */}
          <Item image={"assets/muebles/mesa_de_noche.png"} name={"Mesa de Noche"} price={"00.00"} />
          {/* <!-- End Column 2 --> */}

          {/* <!-- Start Column 3 --> */}
          <Item image={"assets/muebles/cama_madera.png"} name={"Cama 2 plz"} price={"00.00"} />
          {/* <!-- End Column 3 --> */}

          {/* <!-- Start Column 4 --> */}
          <Item image={"assets/muebles/armario_tv.png"} name={"Roperro 3 Puertas"} price={"00.00"} />
          {/* <!-- End Column 4 --> */}

        </div>
      </div>
    </div>
  );
}

function WhyChoose() {
  return (
    <div className="py-28 px-0">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-[0] lg:mr-[0.75] lg:ml-[0.75px] xs:mx-3 justify-between">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-primary text-[2rem] mt-0 mb-6 lg:mb-3 font-medium leading-[1.2] text-center lg:text-left">Por que Escogernos</h2>
            <p className="mt-0 mb-4 text-center lg:text-left lg:mr-3">
              En nuestro compromiso con la calidad y la excelencia, todos nuestros productos están
              meticulosamente confeccionados utilizando maderas de la más alta calidad. Cada pieza es creada con esmero, asegurando no solo la
              durabilidad, sino también un acabado impecable.
            </p>

            <div className="my-12 flex flex-wrap mx-2 lg:mr-[0.75px] lg:ml-[0.75px]">
              <div className="w-1/2 pr-2 lg:pr-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img src="assets/truck.svg" alt="Image" className="imf-fluid" />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">Entrega Rápida</h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">Recibie tus muebles de alta calidad de manera rápida y eficiente. Nuestro servicio de envío rápido
                    garantiza que tus piezas seleccionadas lleguen a tu puerta en el menor tiempo posible.</p>
                </div>
              </div>

              <div className="w-1/2 pl-2 lg:pl-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img src="assets/bag.svg" alt="Image" className="imf-fluid" />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">Cotización Sencilla</h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">Simplificamos el proceso de cotización para que puedas obtener rápidamente un presupuesto personalizado. Obtén precios transparentes y descubre
                    cómo hacer realidad tus proyectos de decoración nunca fue tan sencillo.</p>
                </div>
              </div>

              <div className="w-1/2 pr-2 lg:pr-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img src="assets/support.svg" alt="Image" className="imf-fluid" />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">Atención Ininterrumpida</h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">Nuestro equipo de atención al cliente está disponible para responder tus
                    preguntas, brindarte asesoramiento experto y garantizar una experiencia de compra sin contratiempos</p>
                </div>
              </div>

              <div className="w-1/2 pl-2 lg:pl-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <img src="assets/return.svg" alt="Image" className="imf-fluid" />
                  </div>
                  <h3 className="text-sm text-primary mt-0 mb-2 font-medium leading-[1.2]">Servicio de Armado Incluido</h3>
                  <p className="text-sm leading-6 text-wychoose mt-0 mb-4 mx-1">Con nosotros, no te preocuparás por ensamblar tus nuevos muebles, ya que nuestro equipo capacitado se encargará de todo. </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:w-[41.67%] w-full mt-10 lg:mt-0">
            <div className="relative after:absolute after:w-[300px] lg:after:w-[500px] after:h-[200px] after:bg-whychoose after:bg-no-repeat after:bg-contain after:content-normal after:top-[-80px] after:left-[-95px] after:z-[-1]">
              <img src="assets/muebles/ropero2.png" alt="Image" className="rounded-[20px] max-w-screen-xxs lg:max-w-full h-auto align-middle ml-10 lg:ml-0" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function WeHelp() {
  return (
    <div className="pt-12 lg:pt-28 pr-0 pb-28 pl-0">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 ml-[-0.75pm] mr-[-0.75px] xs:mx-3 justify-between">
          <div className="lg:w-[58.3%] xs:w-full lg:mb-0 mb-10 ml-3 lg:ml-0">
            <div className="grid grid-cols-weHelp relative after:absolute after:w-[255px] after:h-[217px] after:bg-weHelp after:bg-contain after:bg-no-repeat after:z-[-1] after:top-[-85px] lg:after:left-[-70px] after:left-[-110px]">
              <div className="relative col-start-1 col-end-[18] row-start-1 row-end-[27]">
                <img src="assets/muebles/img-grid-1.png" alt="Untree.co" className="rounded-[20px] max-w-full align-middle" />
              </div>
              <div className="relative col-start-[19] col-end-[27] row-start-1 row-end-[5]">
                <img src="assets/img-grid-2.jpg" alt="Untree.co" className="rounded-[20px] max-w-full align-middle" />
              </div>
              <div className="relative col-start-[14] col-end-[27] row-start-6 row-end-[27] pt-5">
                <img src="assets/img-grid-3.jpg" alt="Untree.co" className="rounded-[20px] max-w-full align-middle" />
              </div>
            </div>
          </div>
          <div className="lg:w-[41.67%] xs:w-full pl-0 lg:pl-12">
            <h2 className="text-primary mb-6 text-2xl mt-0 font-medium leading-[1.2] text-center lg:text-left">Te Ayudamos a Hacer un Diseño de Interiores Moderno</h2>
            <p className="mt-0 mb-4 text-center lg:text-left">
              Nuestra misión es ser un recurso confiable y accesible, proporcionando información clara y valiosa para que nuestros clientes tomen decisiones informadas y se sientan seguros en cada paso de su proceso.
            </p>

            <ul className="pl-0 list-none w-full mt-12 lg:mt-6 mb-6 text-center lg:text-left">
              <li className="inline-block w-[45%] mb-3 leading-6 relative pl-2 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "calc(50%-20px)" }}>
                Funcionalidad y Uso que perdura en el tiempo
              </li>
              <li className="inline-block w-[45%] mb-3 leading-6 relative pl-2 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "50%-20px" }}>
                Calidad de los Materiales y Construcción
              </li>
              <li className="inline-block w-[45%] mb-3 leading-6 relative pl-2 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "50%-20px" }}>
                Estilo moderno y Estética de primer nivel
              </li>
              <li className="inline-block w-[45%] mb-3 leading-6 relative pl-2 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "50%-20px" }}>
                Presupuesto y Relación Calidad-Precio
              </li>
            </ul>
            <p className="mt-0 mb-4 text-center lg:text-left">
              <a href="#" className="font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] text-white bg-primary border-primary">Explorar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopularProduct() {
  return (
    <div className="pt-0 pr-0 pb-28 pl-0">
      <div className="max-w-[1320px] ml-auto mr-auto">
        <div className="flex flex-wrap mt-0 mr-[-0.75px] ml-[-0.75] xs:mx-4 ss:mx-0">

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <img src="assets/muebles/banquito.png" alt="Image" className="max-w-full h-auto align-middle" />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-primary mt-0 mb-2 leading-[1.2]">Banquillo - mmodel 1</h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">Elaborado con madera de la m+as alta calidad para interiores o exteriores</p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <a href="#" className="text-primary">Leer más</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <img src="assets/muebles/silla1.png" alt="Image" className="max-w-full h-auto align-middle" />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-primary mt-0 mb-2 leading-[1.2]">Silla - model 2</h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">Silla de madera con base tapizada hecha en color a la preferencia</p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <a href="#" className="text-primary">Leer más</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <img src="assets/muebles/silla2.png" alt="Image" className="max-w-full h-auto align-middle" />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-primary mt-0 mb-2 leading-[1.2]">Silla - model 3</h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">Silla de madera con base y respaldar tapizada hecha en color a la preferencia</p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <a href="#" className="text-primary">Leer más</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="lg:pt-28 xs:pt-0 pr-0 lg:pb-48 pb-0 pl-0">
      <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">
        <div className="flex flex-wrap mt-0 -mx-[0.75]">
          <div className="w-[58.33%] mx-auto text-center">
            <h2 className="text-primary text-[2rem] mt-0 mb-2 font-medium leading-tight">Testimonials</h2>
          </div>
        </div>

        <div className="justify-center flex flex-wrap mt-0 -mx-[0.75]">
          <div className="w-full">
            <div className="relative text-center">

              <div id="testimonial-nav" aria-label="Carousel Navigation" className="xs:hidden lg:block absolute top-1/2 z-[99] w-full">
                <span className="-left-[10px] cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-primary" data-controls="prev" aria-controls="tns1">
                  <i className="bi bi-chevron-left"></i>
                </span>
                <span className="right-0 cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-primary" data-controls="next" aria-controls="tns1">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>

              <div className="p-0" id="tns1-ow">
                <div className="absolute lg:-bottom-[50px] bottom-0 left-1/2 -translate-x-1/2" aria-label="Carousel Pagination">
                  <button data-nav="0" aria-controls="tns1" aria-label="Carousel Page 1 (Current Slide)" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
                  <button data-nav="1" aria-controls="tns1" aria-label="Carousel Page 2" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
                  <button data-nav="2" aria-controls="tns1" aria-label="Carousel Page 3" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
                </div>

                <div className="absolute -left-[10000em]" aria-live="polite" aria-atomic="true">slide <span className="current">2</span>  of 3</div>
                <div id="tns1-mw" className="overflow-hidden">
                  <div className="pt-8" id="tns1-iw">
                    <div className="tns-carousel whitespace-nowrap w-[500%] transition-products" id="tns1">

                      <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">

                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 lg:text-lg">
                                <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] mx-auto" />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
                                <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">

                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 xs:text-sm lg:text-lg">
                                <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle mx-auto" />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
                                <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/* <!-- END item --> */}

                      <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">

                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 text-lg">
                                <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
                                <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/* <!-- END item --> */}

                      <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">

                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 text-lg">
                                <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
                                <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/* <!-- END item --> */}

                      <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
                        <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
                          <div className="lg:w-[66.67%] w-full mx-auto">

                            <div className="testimonial-block text-center">
                              <blockquote className="mb-12 leading-8 text-lg">
                                <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                              </blockquote>

                              <div className="author-info">
                                <div className="mb-5">
                                  <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
                                <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  return (
    <div className="pt-28 pr-0 pb-48 pl-0">
      <div className="max-w-[1320px] lg:mx-auto mx-3">
        <div className="flex flex-wrap mt-0  mx-3 mb-12 ">
          <div className="basis-auto lg:w-1/2 w-full">
            <h2 className="text-primary text-2xl mt-0 mb-2 font-medium leading-[1.2]">Blog Reciente</h2>
          </div>
          <div className="basis-auto lg:w-1/2 lg:text-right text-left w-full">
            <a href="/blog" className="font-semibold text-primary underline">Ver todos los Posts</a>
          </div>
        </div>

        <div className="flex flex-wrap mt-0 mx-[-0.75px]">

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3">
            <div className="post-entry">
              <a href="#" className="block mb-5 text-primary "><img src="assets/muebles/cama2.png" alt="Image" className="rounded-[20px] max-w-full h-auto align-middle" /></a>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]"><a href="#" className="text-primary ">Cama para Dormitorio de 2 Plazas</a></h3>
                <div className="text-sm">
                  <span><a href="#" className="font-semibold text-primary">Nota: </a></span> <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3 my-12 lg:my-0">
            <div className="post-entry">
              <a href="#" className="block mb-5 text-primary "><img src="assets/muebles/mesadenoche2.png" alt="Image" className="rounded-[20px] max-w-full h-auto align-middle" /></a>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]"><a href="#" className="text-primary ">Mesa de Centro, diseño futurista</a></h3>
                <div className="text-sm">
                  <span><a href="#" className="font-semibold text-primary">Nota: </a></span> <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3 my-12 lg:my-0">
            <div className="post-entry">
              <a href="#" className="block mb-5 text-primary "><img src="assets/muebles/mesacomedor.png" alt="Image" className="rounded-[20px] max-w-full h-auto align-middle" /></a>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]"><a href="#" className="text-primary ">Mesa de Comedor - 6 personas</a></h3>
                <div className="text-sm">
                  <span><a href="#" className="font-semibold text-primary">Nota: </a></span> <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Banner />

      <Products />

      <WhyChoose />

      <WeHelp />

      <PopularProduct />

      {/* <Testimonials /> */}

      <BlogSection />
    </>
  );
}
