import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const reviewsFilePath = path.join(process.cwd(), 'app', 'reviews', '_data', 'reviews.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(reviewsFilePath, 'utf8');
    const reviews = JSON.parse(fileContents);
    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newReview = await request.json();
    
    // Read existing reviews
    let reviews = [];
    try {
      const fileContents = await fs.readFile(reviewsFilePath, 'utf8');
      reviews = JSON.parse(fileContents);
    } catch {
      // File doesn't exist or is empty, start with empty array
      reviews = [];
    }

    // Add ID to new review
    const reviewWithId = {
      id: Date.now().toString(),
      ...newReview,
    };

    // Add new review to the beginning
    reviews.unshift(reviewWithId);

    // Write back to file
    await fs.writeFile(reviewsFilePath, JSON.stringify(reviews, null, 2), 'utf8');

    return NextResponse.json(reviewWithId, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to save review' },
      { status: 500 }
    );
  }
}
