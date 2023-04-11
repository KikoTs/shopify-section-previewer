
async function getData(section: any) {
  const res = await fetch(`https://shopify-section-previewer-ah4vz413b-kiriltsanov12-gmailcom.vercel.app/api/get-section?section=${section}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Home({searchParams}: any) {
  console.log(searchParams.section);
  // const section = "index-products"; // You can change this value to the desired section
  const data = await getData(searchParams.section);
  return (
    <main className="">
            {data.map((item: any, index: any) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item }}>
        </div>
      ))}
    </main>
  )
}