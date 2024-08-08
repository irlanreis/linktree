import Footer from "./Footer";

function LinktreePage() {
  const redes = [
    { name: 'Instagram', link: 'https://www.instagram.com/devmacuxi/' },
    { name: 'Whatssapp', link: 'https://api.whatsapp.com/send?phone=5595991706492&text=Ol%C3%A1%20devmacuxi,%20tudo%20bom!' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/irlanreis/' },
    { name: 'Github', link: 'https://github.com/irlanreis' },
    { name: 'Facebook', link: 'https://www.facebook.com/IrlaneJaque/' },
  ]
  return (
    <div className="flex flex-col absolute justify-end w-full h-screen bg-bg-image object-center object-cover
    ">
      <div className="w-full h-3/4 relative flex flex-col justify-between mb-6">
        <div className="text-lg rounded-xl flex flex-col justify-center items-center">
          {
            redes.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-96 text-zinc-50 block my-2 p-4 sm:w-96 text-center bg-zinc-600 rounded-xl hover:bg-opacity-0 hover:text-zinc-50 hover:text-2xl hover:border-2 hover:w-96 hover:font-bold focus:border-2 hover:p-3 font-extralight"
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            ))
          }
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default LinktreePage;