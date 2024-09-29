//
import getPosts from 'hp/get_posts'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const paginatorHp = searchParams.get('paginatorHp');

    const { posts, previous, next } = await getPosts(paginatorHp);

    return Response.json({ posts, previous, next }, { status: 200 });
  } catch (error) {
    console.log("error: " + error);
    return Response.json({ message: 'Internal server error' }, {
      status: 500,
    });
  }
}