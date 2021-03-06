import React from "react";

function Modal() {
    return (
        <div>
<button id="modalActivate" type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalPreview">
  Launch demo modal
</button>
<div class="modal fade top" id="exampleModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-frame modal-top" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalPreviewLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    )}

    export default Modal;
