import "./App.css"
import { useState } from 'react'

const App = () => {
  const [FormData, setFormData] = useState({
    name:"",email:"",password:""
  })

  console.log(FormData);
  
  function handleChange(e) {

        let {name,value} = e.target
        setFormData({...FormData, [name]:value})
  }
  function handleSubmit(e) {
      e.preventDefault()
  }
  
  return (
    <div className='flex min-h-screen w-full items-center justify-center px-4 py-12'>
      <main className='w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 sm:p-8'>
        <div className='mb-8'>
          <h1 className='text-2xl font-semibold tracking-tight text-white'>Form handling</h1>
          <p className='mt-2 text-sm text-gray-400'>Enter your details below.</p>
        </div>

        <form action="" className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='mb-2 block text-sm font-medium text-gray-200'>Name</label>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Your name'
              onChange={handleChange}
              className='w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30'
            />
          </div>

          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-200'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='you@example.com'
              onChange={handleChange}
              className='w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30'
            />
          </div>

          <div>
            <label htmlFor='password' className='mb-2 block text-sm font-medium text-gray-200'>Password</label>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Enter your password'
              onChange={handleChange}
              className='w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30'
            />
          </div>
          <button
            type='submit'
            className='w-full rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 active:scale-[0.98]'
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default App