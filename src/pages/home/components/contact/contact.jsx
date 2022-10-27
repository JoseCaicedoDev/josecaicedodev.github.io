import imgLogo from '../../../../assets/logoJC_minificado.svg'

export function Contact() {
  return (
    <>
      <section
        className="flex justify-center items-center my-7
        text-gray-900 dark:text-slate-200"
      >
        <img alt="" className="w-20 h-20" src={imgLogo} />
        <p className="font-semibold ml-1 text-4xl">aicedo</p>
      </section>
    </>
  )
}
