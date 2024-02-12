export default function InfoBox({ children }) {
  return (
    <div className="text-center bg-green-200 p-4 border border-green-300 rounded-lg ">
      {children}
    </div>
  );
}
