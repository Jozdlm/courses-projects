interface Props {
  merchantName: string;
}

export default function Topbar({ merchantName }: Props) {
  return (
    <div className="mb-6 flex w-full justify-center border-b border-b-gray-200 bg-white p-4">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1 className="text-base leading-normal font-medium">{merchantName}</h1>
        <p className="text-sm">Profile</p>
      </div>
    </div>
  );
}
