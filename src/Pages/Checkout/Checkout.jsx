import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
    const singleProduct = useLoaderData();
    const { _id, title, price, img } = singleProduct;
    const { user } = useContext(AuthContext)
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const description = form.textarea.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            price: price,
            service_id: _id,
            description: description
        }
        console.log(booking)

        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Data inserted',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold">Title:{title} </h2>

            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 card-body gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={`$` + price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>


                </div>
                <div className="card-body pt-0 pb-0">
                    <textarea placeholder="Bio" name="textarea" className="textarea textarea-bordered w-full" ></textarea>
                </div>

                <div className="card-body pt-0 pb-0">

                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary btn-block" value="Confirm Order" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;