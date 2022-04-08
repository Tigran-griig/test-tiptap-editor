import Image from "next/image";

const Avatar = ({image}: {image?: string }) => {
  const defaultImage =image || "https://images.unsplash.com/photo-1640797695855-562b2202182e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <Image
      src={defaultImage}
      width={42}
      height={42}
      alt="avatars"
      className="border-box rounded-full object-cover pb-1"
    />
  );
};

export default Avatar;
