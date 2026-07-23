import Image from "next/image";

export function UserAvatar() {
  return (
    <Image
      src="https://github.com/wwilliamsantana.png"
      alt="User Avatar"
      loading="eager"
      width={44}
      height={44}
      className="rounded-full"
    />
  );
}
