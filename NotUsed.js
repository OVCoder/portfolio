authorize(function(authClient) {
    var request = {
      // The ID of the spreadsheet to update.
      spreadsheetId: '1r9vUPTij3LQ8-07Jppi30trllQIneIKnF22gAJLpcZY',  // TODO: Update placeholder value.
  
      // The A1 notation of a range to search for a logical table of data.
      // Values will be appended after the last row of the table.
      range: 'A1',  // TODO: Update placeholder value.
  
      // How the input data should be interpreted.
      valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.
  
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
  
      resource: {
        // TODO: Add desired properties to the request body.
      },
  
      auth: authClient,
    };
  
    sheets.spreadsheets.values.append(request, function(err, response) {
      if (err) {
        console.error(err);
        return;
      }
  
      // TODO: Change code below to process the `response` object:
      console.log(JSON.stringify(response, null, 2));
    });
  });
  
  function authorize(callback) {
    // TODO: Change placeholder below to generate authentication credentials. See
    // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
    //
    // Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/spreadsheets'
    var authClient = null;
  
    if (authClient == null) {
      console.log('authentication failed');
      return;
    }
    callback(authClient);
  }