import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";
import profileImg from "../assets/profile2.jpg";


const Profile = () => {
  const { user, updateUserProfile,setUser } = useAuth();
  console.log(user);
  const updateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(name, photo);
    try {
      await updateUserProfile(name, photo);
      setUser({...user,displayName:name,photoURL:photo})
      console.log("Profile updated successfully");
    } catch (err) {
      console.log(err.message);
    }
    document.getElementById("my_modal_4").close();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src={profileImg}
          className="w-full mb-4 rounded-t-lg h-44"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-28 w-28  border-2 border-white "
            />
          </a>

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name:
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email:
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <button
                  className="bg-[#ff6347] px-10 py-1 rounded-lg text-white cursor-pointer \ block mb-1"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Update Profile
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-9/12 ">
                    <h3 className="font-bold text-xl text-center">
                      {" "}
                      Update Your Profile
                    </h3>
                    <div className="modal-action">
                      <form onSubmit={updateProfile} className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            placeholder="Name"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">PhotoURL</span>
                          </label>
                          <input
                            defaultValue={user?.photoURL}
                            type="text"
                            name="photo"
                            placeholder="Photo"
                            className="input input-bordered"
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button
                            type="submit"
                            className="py-3  rounded-md text-white font-semibold  bg-[#FF6347]"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
