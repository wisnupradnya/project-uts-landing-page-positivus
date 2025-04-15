export default function ContactInfo() {
  return (
    <div>
      <button className="bg-lime-400 text-black font-semibold px-4 py-1 rounded-md mb-4">
        Contact us:
      </button>
      <div className="space-y-1 text-sm text-gray-200">
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St
          <br />
          Moonstone City, Stardust State 12345
        </p>
      </div>
    </div>
  );
}
