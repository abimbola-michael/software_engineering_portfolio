export default function ProfilePhoto() {
  return (
    <div className="w-[200px] h-[200px] rounded-full border-4 border-stone-200 my-3">
      <img
        src={"src/assets/images/profile_photo.jpg"}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}
