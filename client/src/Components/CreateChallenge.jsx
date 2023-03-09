import React from 'react'

function CreateChallenge({open,HandleClickChallenge}) {
  function checkRadio(elem){
    let elems = document.querySelectorAll("input[type=radio]")
    for(let el of elems) {
        if(el != elem.previousSibling && el.checked){
            elem.previousSibling.checked = !elem.previousSibling.checked  
        }
    }
    
  }

  return (
    <>
    {
        open && (
            <div className="overlay " onClick={HandleClickChallenge}>
                <div className="centrale" onClick={(e)=>e.stopPropagation()}>
                    <div className="flex flex-col w-[100%] mb-2 space-y-3 p-8">
                        <input type="text" name="title" id="title" className='w-80% h-[60%] bg-[#f2f2f2] pl-3 py-3 rounded-md text-3xl' placeholder='Entrer le titre'/>
                        <textarea placeholder='Enter the challenge...' name="description" id="description" cols="30" rows="10" className='w-80% p-5 bg-[#f2f2f2] rounded-md'></textarea>

                    </div>
                    <div className="flex flex-row justify-around">
                        <div className="">
                            <input type="radio" name="diff" id="" className=''/>
                            <label htmlFor="" className='ml-2 text-xl  text-[#f2f2f2] border border-[#F2F2F2] px-10 py-[.35rem] rounded-full' id='easy' onClick={function(){checkRadio(document.getElementById('easy'))}}>Facile</label>
                        </div>
                        <div className="">
                            <input type="radio" name="diff" id="" className=''/>
                            <label htmlFor="" className='ml-2 text-xl  text-[#f2f2f2] border border-[#F2F2F2] px-10 py-[.35rem] rounded-full' id='medium' onClick={function(){checkRadio(document.getElementById('medium'))}}>Moyen</label>
                        </div>
                        <div className="">
                            <input type="radio" name="diff" id="" className=''/>
                            <label htmlFor="" className='ml-2 text-xl  text-[#f2f2f2] border border-[#F2F2F2] px-10 py-[.35rem] rounded-full' id='hard' onClick={function(){checkRadio(document.getElementById('hard'))}}>Difficile</label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className='my-8 px-10 py-4 rounded-lg bg-[#00B8FF] font-bold text-[#f2f2f2]'>Creer le challenge</button>
                    </div>

                </div>
            </div>
        )
    }
    </>
  )
}

export default CreateChallenge