import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewHouse } from '../../redux/api/housesAPI'

export default function AddHouse() {

    const dispatch = useDispatch()

    const handleSubmitFormHouse = async (e) => {
        e.preventDefault()

        const formEl = document.getElementById('house-add-img')
        
        // const {title, total_area, bedrooms_quantity, holl, kitchen, wardrobe, living_room, bathroom_quantity, terrace, garage, imgs} = e.target
        console.log(e.target.title.value)
        console.log(e.target.imgs.files)

        let formData = new FormData(formEl)
        console.log(formData)
        dispatch(addNewHouse(formData))
    }
    
  return (
    <>
        <form onSubmit={handleSubmitFormHouse} action="" method="post" id="house-add-img" encType="multipart/form-data">
            <div>
                <input name="title" required />
            </div>
            <div>
                <input name="total_area" required />
            </div>
            <div>
                <input name="bedrooms_quantity" required />
            </div>
            <div>
                <input name="holl" required />
            </div>
            <div>
                <input name="living_room" required/>
            </div>
            <div>
                <input name="kitchen" required />
            </div>
            <div>
                <input name="wardrobe" required />
            </div>
            <div>
                <input name="bathroom_quantity" required />
            </div>
            <div>
                <input name="terrace" required />
            </div>
            <div>
                <input name="garage" required />
            </div>
            <div>
                <input type="file" name="imgs" required
                multiple />
            </div>
            <button type='submit'>Add house</button>
        </form>
    </>
  )
}
