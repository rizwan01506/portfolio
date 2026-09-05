import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { personalInfo, seo } from '@/lib/data';

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const photoBuffer = await readFile(join(process.cwd(), 'public', 'profile-picture.png'));
  const photoSrc = `data:image/png;base64,${photoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#f7f6f2',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 620 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 3,
              color: '#4a7c66',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            {personalInfo.title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 700,
              color: '#1a1a18',
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            {personalInfo.name}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#57534e',
              lineHeight: 1.4,
            }}
          >
            {personalInfo.roles.join(' · ')}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#4a7c66',
              marginTop: 40,
            }}
          >
            {seo.url.replace('https://', '')}
          </div>
        </div>
        <img
          src={photoSrc}
          width={380}
          height={380}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #1a1a18',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
