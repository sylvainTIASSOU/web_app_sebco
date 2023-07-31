"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Input, Dropdownmenu, Footer } from "@/component";

export default function Home() {
  return (
    <>
    

   

      <div className="flex flew-col space-y-24 w-full  md:flex-row">
        <div>
          
            <div className="content-center  sidebarmd  flex flex-col space-y-2 p-5 w-full items-center justify-center md:mw-auto">

            <div className=" w-full contact contact_visible sideIconePosition">
        <div className="">
        <Image src={"/images/logo0.png"} alt="" width={150} height={150} className=""/>
        </div>
      </div>
            <div className=" w-full flex flex-row  items-center justify-center space-x-30
              2 mdbtn ">
                <div className="md:w-full ">
                  <Button
                    title="Sables"
                    containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-1"
                    handleClick={() => {}}
                  />
                </div>

                <div className="md:w-full">
                  <Button
                    title="Graviers"
                    containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-1"
                    handleClick={() => {}}
                  />
                </div>

                <div className="md:w-full ">
                  <Button
                    title="Remblais"
                    containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-1"
                    handleClick={() => {}}
                  />
                </div>

                <div className="md:w-full ">
                  <Button
                    title="Boutique"
                    containerStyle=" text-black text-lg font-bold bg-gray-200 w-full p-1"
                    handleClick={() => {}}
                  />
                </div>
              </div>

              <div className=" contactPosition p-4 mt-4 rounded flex flex-col space-y-2  bg-gray-200 mh-auto mw-auto relative bottom-24 contact contact_visible">
                <h2 className="text-lg font-bold self-center">
                  Contacter Nous
                </h2>

                <div>
                  <Input
                    hint="Name"
                    name="name"
                    type="text"
                    style="bg-white border-2"
                  />
                </div>
                <div>
                  <Input
                    hint="Email"
                    name="email"
                    type="text"
                    style="bg-white border-2"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    id=""
                    cols="20"
                    rows=""
                    placeholder="message"
                  >
                   
                    message
                  </textarea>
                </div>

                <div className="items-center">
                  <Button
                    title="ENVOYER"
                    containerStyle=" text-white text-lg font-bold bg-blue-700 w-full p-1 rounded"
                    handleClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        

        <div className="absolute page01md ">
          <div className="flex flex-col page1md">
          <span className="text-36 font-extrabold text-2xl px-2">
          Fait vous livrez vos 
           materiaux de construction 
          en toute sécurité en un seul 
          clique depuis 
          chez vous!
          </span>
               <img src="/images/02.png" alt="" className="h-800, w-full object-cover page02md"/>
          </div>



          <div className="flex flex-col">
              <div>
                <span>
                Besoin de sable, de gravier? votre partenaire la plus proche 
a votre service.
                </span>
              </div>

              <div>
              <img src="/images/61.png" alt="" className="h-800, w-full object-cover page02md"/>
              </div>
          </div>


          <div className="bg-white">
            <div>
              <p>
              Pré-visuamisez vos resultat aprés votre chois et faite votre commande en un seul clique
              </p>
            </div>

            <div className="flex flex-col page2md">
                <div className="bg-blue-700 page002md    mh-auto p-10 mw-auto flex flex-col justify-center items-center">
                    <Image src={'/icons/toch.png'} alt="" width={80} height={80} />
                    <span className="text-white font-bolds text-lg">
                        je fais mon choix
                    </span>
                </div>

                <div className="bg-blue-500 page002md  mh-auto p-10 mw-auto flex flex-col justify-center items-center">
                    <Image src={'/icons/eye.png'} alt="" width={80} height={80} />
                    <span className="text-white font-bolds text-lg">
                    je pré-visualise mon rendu
                    </span>
                </div>

                <div className="bg-blue-300 page002md  mh-auto p-10 mw-auto flex flex-col justify-center items-center">
                    <Image src={'/icons/velo.png'} alt="" width={80} height={80} />
                    <span className="text-white font-bolds text-lg">
                    je passe ma commande
                    </span>
                </div>
            </div>
          </div>


        </div>

        <div>
          
        </div>
      </div>


      
    </>
  );
}
