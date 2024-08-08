import Footer from "./Footer";

function LinktreePage() {
  const redes = [
    { name: 'Instagram', link: 'https://www.instagram.com' },
    { name: 'You tube', link: 'https://www.youtube.com' },
    { name: 'Whatssapp', link: 'https://www.whatssapp.com' },
    { name: 'Telegram', link: 'https://www.telegram.com' },
    { name: 'Facebook', link: 'https://www.facebook.com' },
    { name: 'Site', link: 'https://www.site.com' },
  ]
  return (
    <div className="flex flex-col absolute justify-end w-full h-screen bg-bg-image">
      <div className="w-full h-3/4 relative flex flex-col justify-between">
        <div className="text-lg rounded-xl flex flex-col justify-center items-center">
          {
            redes.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-96 text-zinc-600 block my-2 p-4 sm:w-96 text-center bg-zinc-300 rounded-xl hover:bg-opacity-0 hover:text-zinc-50 hover:text-2xl hover:border-2 hover:w-96 hover:font-bold focus:border-2 hover:p-3 font-extralight"
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