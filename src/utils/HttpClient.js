const HttpClient = () => {

  const get = async (url, params, headers) => {
    if (!params || typeof params === 'undefined') {
      params = '';
    }
    
    const response = await fetch(`${url}` + params, {
        method: 'GET',
        headers: headers
      },
    );

    const responseJSON = await response.json();
    
    if (!response.ok) {
      throw new Error(responseJSON?.message || 'Erro interno');
    }

    return responseJSON;
  }

  const post = async (url, body, headers) => {
    const response = await fetch(url,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      },
    );

    const responseJSON = await response.json();

    if (!response.ok) {
      throw new Error(responseJSON?.message || 'Erro interno');
    }

    return responseJSON;
  }

  const put = async (url, headers, body) => {
    const response = await fetch(url,
      {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: headers
      },
    );

    const responseJSON = await response.json();

    if (!response.ok) {
      throw new Error(responseJSON?.message || 'Erro interno');
    }

    return responseJSON;
  }

  // delete is a reserved js keyword
  const remove = async (url, headers) => {
    const response = await fetch(url,
      {
        method: 'DELETE',
        headers: headers
      },
    );

    const responseJSON = await response.json();

    if (!response.ok) {
      throw new Error(responseJSON?.message || 'Erro interno');
    }

    return responseJSON;
  }

  return {
    get,
    post,
    put,
    remove
  }
}

export default HttpClient;