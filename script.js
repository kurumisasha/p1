document.getElementById('voucher-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;

    fetch(`https://api.teeg.cloud/vouchers/campaigns/4VKE4OE/cards/${cardNumber}?tz=MIDE4X4STI`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzE5Njc3NzQ0LCJuYmYiOjE3MTk2NzY4NDQsImlwQWRkcmVzcyI6IjEwNC4yOC4yNDcuMTM1Iiwib2lkIjoiYjIzNmQzYTQtNzIyZC00ODU4LWEwNWItNjMyNmM1OTJhYjdkIiwic3ViIjoiYjIzNmQzYTQtNzIyZC00ODU4LWEwNWItNjMyNmM1OTJhYjdkIiwiZW1haWxzIjpbImhyZGdhbWVzMTAxQGdtYWlsLmNvbSJdLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6IjRlMWM5ZTQyLTI5YTQtNDJiZS1iY2NmLWE5YTRkMTQ5Yzc5ZiIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzE5Njc2ODQ0fQ.AwA7Tbd-tDnwPbz080hkDkrkU7MtnwQ5WChF-_lvRXykCwNhsmylUrITnxOlRVD8ETy3y5cnCurWppYBOdHVZ0pI_JyZOArK2bUgo1mrCBX5nYbxvKZjXGDLg7xJyLzfIBWqpG7tLNsykSLhPnXV8Ix40bKdQhdDYvOb0tRiJHkNsuepGw7dWkdccD2fBNUovA5Rxr7FZUdEpvCvj3a7FKna3WedSh4TuI8OB3lDsDQBUsWOTkJMbkJw7ifE2X4AY6tK8aSwaCCOqqyBUi2Ts8D6h27sTX-K6J7Pjz1J2Ddye6gaL1zX5z4WJMfMeJkVd4bpeIeYA-qDQcoS2je-wA',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('voucher-code').innerText = data.voucherCode;
        document.getElementById('voucher-result').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to generate voucher. Please try again.');
    });
});