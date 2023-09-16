
const ProfilePage = ({params}) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>ProfilePage
        </h1>
        <p className="text-4xl">
            Profile <span className="p-2 rounded-lg bg-orange-600">{params.id}
                    </span>
        </p>
        </div>
  )
}

export default ProfilePage