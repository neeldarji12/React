import React,{useState} from 'react'

export default function Todo() {

    const[text,settext]=useState('');
    const[state,setstate]=useState([]);

    function addtext(e){
        settext(e.target.value);
    }

    function handlesubmite(e){
        e.preventDefault();
        setstate([...state, text]);
        settext('');
    }

    function deletebtn(id){
        let del = state.filter((el,i)=>{
            return i!=id;
        })
        setstate(del);
    }
    function editbtn(id){
        
        settext(state[id]);
        setstate(state.filter((e, index) => index !== id));
    }

  return (
    <div className='container'>
        <h1>Todo List</h1>
        <form onSubmit={handlesubmite}>
            <input type='text' placeholder='Enter The text' value={text} onChange={addtext} className='input' />
            <input type='submit' value='Add' className='btn' />
        </form>
        {
            state.map((el,i)=>{
                return <>
               <div key={i}>
                 <li><h3>{el}</h3></li>
                <button onClick={()=>deletebtn(i)} className='btn'>Delete</button>
                <button onClick={()=>editbtn(i)} className='btn'>Edit</button>
               </div>
                </>
            })
        }
    </div>
  )
}
