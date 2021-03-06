<div id="app-navigation">
	<ul class="with-icon">
		<?php foreach ($_['navigationItems'] as $item) { ?>
		<li data-id="<?php p($item['id']) ?>" class="nav-<?php p($item['id']) ?>">
			<a href="<?php p(isset($item['href']) ? $item['href'] : '#') ?>"
				class="nav-icon-<?php p($item['icon'] !== '' ? $item['icon'] : $item['id']) ?> svg">
				<?php p($item['name']);?>
			</a>
		</li>
		<?php } ?>
	</ul>

    <div id="box-anim">
        <div class="box-wrapper">
            <div class="box-front">
                <div class="check"></div>
            </div>
            <div class="box-back"></div>
        </div>
    </div>

	<div id='app-download'>
	<button class='app-download-btn' id='app-download-btn'>
	    <i class="fa fa-angle-double-down" aria-hidden="true"></i>
    </button>
	    <div class='app-download-elem app-download-elem__computer'>
	        <a href=''>
                <div class='app-download-img'>
                    <img src='/apps/files/img/laptop.png'/>
                    <i class="fa fa-download" aria-hidden="true"></i>
                </div>
                <div class='app-download-text'>
                   <span>Pobierz aplikację do synchronizacji plików pomiędzy Expansio Docs a Twoim komputerem</span>
                </div>
           </a>
	    </div>
	    <div class='app-download-elem app-download-elem__phone'>
	        <a href=''>
                <div class='app-download-img'>
                    <i class="fa fa-download" aria-hidden="true"></i>
                    <img src='/apps/files/img/phone.png' />
                </div>
                <div class='app-download-text'>
                    <span>Pobierz aplikację mobilną na komórkę</span>
                </div>
	        </a>
	    </div>
	</div>



	<div id="app-settings">
		<div id="app-settings-header">
			<button class="settings-button" data-apps-slide-toggle="#app-settings-content">
				<?php p($l->t('Settings'));?>
			</button>
		</div>
		<div id="app-settings-content">
			<div id="files-setting-showhidden">
				<input class="checkbox" id="showhiddenfilesToggle" checked="checked" type="checkbox">
				<label for="showhiddenfilesToggle"><?php p($l->t('Show hidden files')); ?></label>
			</div>
			<label for="webdavurl"><?php p($l->t('WebDAV'));?></label>
			<input id="webdavurl" type="text" readonly="readonly" value="<?php p(\OCP\Util::linkToRemote('webdav')); ?>" />
			<em><?php print_unescaped($l->t('Use this address to <a href="%s" target="_blank" rel="noreferrer">access your Files via WebDAV</a>', array(link_to_docs('user-webdav'))));?></em>
		</div>
	</div>
</div>
