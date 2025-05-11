import { ImageResponse } from 'next/og';
import { shouldNeverHappen } from '../../../utils/panic-helper';
import { ICON_DATA_URI } from './consts';

export const runtime = 'edge';

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text + 'airRnot.dev')}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(
      resource[1] ?? shouldNeverHappen('resource[1] is null'),
    );
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get('title') ?? shouldNeverHappen('title is not defined');

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: '#575279',
        backgroundColor: '#faf4ed',
        height: '100%',
        width: '100%',
        fontSize: '80px',
        fontFamily: 'ZenKakuGothicNew',
        paddingTop: '64px',
        paddingLeft: '50px',
        paddingRight: '50px',
        border: '32px solid #56949f',
      }}
    >
      <span>{title}</span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          columnGap: '20px',
          position: 'absolute',
          bottom: '48px',
          right: '50px',
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            backgroundImage: `url(${ICON_DATA_URI})`,
            backgroundSize: '100% 100%',
            borderRadius: '50%',
            marginTop: '8px',
          }}
        />
        <span
          style={{
            fontSize: '40px',
            fontFamily: 'ZenKakuGothicNew',
            color: '#575279',
          }}
        >
          airRnot.dev
        </span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'ZenKakuGothicNew',
          data: await loadGoogleFont(
            'Zen+Kaku+Gothic+New:wght@700&display=swap',
            title,
          ),
          style: 'normal',
        },
      ],
    },
  );
}
