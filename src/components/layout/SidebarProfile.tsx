import Image from "next/image";

export function SidebarProfile() {
  return (
    <div className="border-t border-slate-200 p-5">
      <div className="flex items-center gap-3">
        <Image
          src="https://github.com/wwilliamsantana.png"
          alt="William Santana"
          width={44}
          height={44}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold">William Santana</h3>

          <p className="text-sm text-slate-500">Administrator</p>
        </div>
      </div>
    </div>
  );
}
