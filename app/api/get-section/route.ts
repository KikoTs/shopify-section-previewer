import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section');
  const sections = section?.split(',') ?? [];

  try {
    const fetchPromises = sections.map(async (section) => {
      const response = await fetch(`https://lifeboostcoffee.com/?sections=${section}`);
      const data = await response.json();
      return data[section];
    });

    const arrayed = await Promise.all(fetchPromises);
    return NextResponse.json(arrayed);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.error(500, 'Failed to fetch data.');
  }
}
