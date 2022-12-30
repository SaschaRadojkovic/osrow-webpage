const baseUrl = "http://localhost:4000";

export async function fetchPage(page) {
  const url = `${baseUrl}/posts/page/${page}`;
  const result = await fetch(url);
  const fetchedPages = await result.json();
  return fetchedPages;
}
export async function postPage(body) {
  const url = `${baseUrl}/posts`;
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const result = await fetch(url, options);
  const fetchedPages = await result.json();
  return fetchedPages;
}

export async function fetchAllPages() {
  const url = `${baseUrl}/posts`;
  const result = await fetch(url);
  const fetchedPages = await result.json();
  return fetchedPages;
}

export async function deletePost(_id) {
  const url = `${baseUrl}/posts/${_id}`;
  const options = {
    method: "DELETE",
  };
  const result = await fetch(url, options);
  const fetchedPages = await result.json();
  return fetchedPages;
}
