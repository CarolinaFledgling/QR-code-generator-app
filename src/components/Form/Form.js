function Form() {
  return (
    <form action="#" class="form">
      <label class="form-label" for="url">
        Enter url:
      </label>
      <input
        id="url"
        class="form-input"
        type="url"
        spellcheck="false"
        placeholder="https://example.com"
        requireds
      />
      <span class="from-span"></span>
      <div class="btns-group">
        <button class="btn btn-generate">Generate QR Code</button>
        <button class="btn btn-reset">Reset</button>
      </div>
      <button class="btn btn-download">Download File</button>
    </form>
  );
}

export default Form;
