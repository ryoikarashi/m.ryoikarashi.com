import type { VercelRequest } from '@vercel/node';
import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: VercelRequest) {
  const fontRes = await fetch(`${process.env.APP_URL}/assets/fonts/josefin-sans.ttf`);
  const fontData = await fontRes.arrayBuffer();
  const { searchParams } = new URL(req.url ?? '');
  const hasTitle = searchParams.has('title');
  const hasDate = searchParams.has('date');
  const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Memorandums';
  const date = hasDate ? searchParams.get('date')?.slice(0, 100) : 'm.ryoikarashi.com';

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#111111',
          height: '100%',
          width: '100%',
          fontFamily: '"Josefin Sans", sans-serif',
          fontWeight: 'bold',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 2,
          padding: 50,
          position: 'relative',
        }}
      >
        <div style={{fontSize: 65}}>{title}</div>
        <div style={{fontSize: 25, position: 'absolute', bottom: 20, right: 40}}>
          {date}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Josefin Sans',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
