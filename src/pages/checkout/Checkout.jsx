import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;

    const { user } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/bookings';

    const handleBookOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName ? user?.displayName : form.name.value;
        const email = user?.email;
        const price = service?.price ? service?.price : form.price.value;
        const date = form.date.value;
        const details = form.textArea.value;

        const order = {
            name,
            email,
            price,
            date,
            details,
            service_id: _id,
            img,
            title
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('data inserted successfully')
                    form.reset()
                    navigate(from, { replace: true })
                }
            })



    }


    return (
        <div className="mb-5">
            <h2 className="text-center text-xl font-bold my-5">This is checkout : {title}</h2>

            <form onSubmit={handleBookOrder}>
                <div className="min-h-screen bg-base-200 rounded-2xl p-10">
                    <div className="md:flex gap-6 mb-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" title="You can not change your email here" readOnly defaultValue={user?.email} placeholder="Your email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="md:flex gap-6 mb-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <textarea placeholder="Your message" name="textArea" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <input type="submit" value="Confirm Order" className="btn btn-block btn-primary " />
                </div>
            </form>
        </div>


    );
};

export default Checkout;